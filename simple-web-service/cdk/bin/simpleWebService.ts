#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SimpleWebServiceStack } from '../lib/simpleWebService-stack';

const app = new cdk.App();
new SimpleWebServiceStack( app, 'SimpleWebServiceStack' );
