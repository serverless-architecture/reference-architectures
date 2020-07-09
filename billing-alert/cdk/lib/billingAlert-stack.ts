import * as cdk from '@aws-cdk/core';
import * as cloudwatch from "@aws-cdk/aws-cloudwatch";
import * as cloudwatch_actions from "@aws-cdk/aws-cloudwatch-actions";
import * as sns from "@aws-cdk/aws-sns";
import * as sns_subscriptions from "@aws-cdk/aws-sns-subscriptions";

export interface BillingAlertStackProps extends cdk.StackProps {
    alertThresholdInDollars: number,
    email: string
}

export class BillingAlertStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: BillingAlertStackProps) {
        super(scope, id, props);

        const alarm = new cloudwatch.Alarm(this, "SpendingAlarm", {
            metric: new cloudwatch.Metric({
                namespace: "AWS/Billing",
                metricName: "EstimatedCharges",
                dimensions: {"Currency": "USD"},
                period: cdk.Duration.hours(6), // 21600,
                statistic: "Maximum"
            }),

            alarmDescription: `Alarm if AWS spending is over $${props.alertThresholdInDollars}`,
            comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
            evaluationPeriods: 1,
            threshold: props.alertThresholdInDollars,
        })

        const topic = new sns.Topic(this, "SpendingTopic")
        topic.addSubscription(new sns_subscriptions.EmailSubscription(props.email))

        const snsAction = new cloudwatch_actions.SnsAction(topic)
        alarm.addAlarmAction(snsAction)
        alarm.addInsufficientDataAction(snsAction)
    }
}
