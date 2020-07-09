#!/usr/bin/env node
import 'source-map-support/register';
import * as fs from "fs";
import * as cdk from '@aws-cdk/core';
import { BillingAlertStack, BillingAlertStackProps } from '../lib/billingAlert-stack';

const config: BillingAlertStackProps = JSON.parse(fs.readFileSync('./alert.json', 'utf-8'));

const app = new cdk.App();
new BillingAlertStack(app, 'BillingAlertStack', config);
