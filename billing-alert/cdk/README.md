# Billing Alert (CDK)

This uses the [Billing Alert Pattern](https://www.jeremydaly.com/billing-alert-pattern/).

Follow these steps to deploy this pattern using [CDK](https://aws.amazon.com/cdk/). This pattern always deploys into the
us-east-1 region (N. Virginia) as that is where AWS delivers the billing metrics.

1. Enable Billing Alerts in the Console

See <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html#turning_on_billing_metrics>

There doesn't appear to be an API for this!

2. Update values in <./alert.json>

```
{
  "email": "...",
  "alertThresholdInDollars": 2
}
```

3. Install Typescript

```bash
npm -g install typescript
```

4. Install CDK

```bash
npm i -g aws-cdk
```

5. Install dependencies

```bash
npm install
```

6. Synthesize an AWS CloudFormation template

```bash
cdk synth
```

7. Deploys the CDK toolkit stack into an AWS environment

```bash
cdk bootstrap
```

8. Deploy the Stack

```bash
cdk deploy
```

9. Clean Up

```bash
cdk destroy
```

> By default, CDK uses the same configuration settings as the AWS CLI (by way of `~/.aws`). If you want to
> change this, [read how to configure AWS access here](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html).
