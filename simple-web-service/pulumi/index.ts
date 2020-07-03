import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Provision a DynamoDB Table.
const users = new aws.dynamodb.Table("users", {
    attributes: [{
        name: "id",
        type: "S",
    }],
    hashKey: "id",
    billingMode: "PAY_PER_REQUEST",
    streamViewType: "NEW_AND_OLD_IMAGES",
});

// Create an API Gateway with a single /user/{id} route that uses the Table.
// This uses the default Lambda, IAM, and name settings; for full control over
// them, see the aws.lambda.CallbackFunction class, which can be allocated
// separately and passed instead of the inline eventHandler below.
const api = new awsx.apigateway.API("api", {
    routes: [{
        path: "/user/{id}",
        method: "GET",
        eventHandler: async (event, context) => {
            const tableName = users.name.get();
            const tableArn = users.arn.get();
            return { statusCode: 200, body: JSON.stringify(event) };
        },
    }]
});

// Export the resulting API Gateway URL:
export const url = api.url;
