import * as cdk from '@aws-cdk/core';
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";
import * as dynamodb from "@aws-cdk/aws-dynamodb";

export class SimpleWebServiceStack extends cdk.Stack {
  constructor( scope: cdk.Construct, id: string, props?: cdk.StackProps ) {
    super( scope, id, props );


    const userTable = new dynamodb.Table( this, 'users', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
      tableName: 'users',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    } );

    const api = new apigateway.RestApi( this, "simple-web-service-api", {
      restApiName: "Simple Web Service API",
      description: "A basic of pattern for creating a serverless API or web service. It uses DynamoDB as the database because it scales nicely with the high concurrency capabilities of AWS Lambda."
    } );

    const handler = new lambda.Function( this, "SimpleServiceApiHandler", {
      runtime: lambda.Runtime.NODEJS_12_X, // So we can use async in widget.js
      code: lambda.Code.asset( "resources" ),
      handler: "simpleWebService.handler",
    } );
    handler.addEnvironment( 'TABLE_NAME', userTable.tableName )

    userTable.grantReadWriteData( handler )
    const apiHandler = new apigateway.LambdaIntegration( handler );
    const user = api.root.addResource( 'user' ).addResource( '{id}' )
    user.addMethod( 'GET', apiHandler )

  }
}
