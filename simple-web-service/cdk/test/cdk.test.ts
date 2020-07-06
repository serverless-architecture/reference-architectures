import { SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';

import * as cdk from '@aws-cdk/core';
import * as Cdk from '../lib/simpleWebService-stack';

const app = new cdk.App();
const stack = new Cdk.SimpleWebServiceStack( app, 'SimpleWebServiceTestStack' );
test( 'Create Stack', () => {
  expect( SynthUtils.toCloudFormation( stack ) ).toMatchSnapshot();
} );

test( 'Create Resources', () => {
  expect( stack ).toHaveResource( 'AWS::ApiGateway::RestApi' )
  expect( stack ).toHaveResource( 'AWS::Lambda::Function' )
  expect( stack ).toHaveResource( 'AWS::DynamoDB::Table' )
} )
