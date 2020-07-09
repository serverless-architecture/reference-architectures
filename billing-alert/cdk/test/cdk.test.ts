import { SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Cdk from '../lib/billingAlert-stack';

test('stack creates alert', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Cdk.BillingAlertStack(app, 'BillingAlertStack', {
        alertThresholdInDollars: 100,
        email: "milton@initech.com"
    });
    // THEN
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
