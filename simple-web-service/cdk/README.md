# Simple Web Service (CDK)

This uses the [Simple Web Service Pattern](https://www.jeremydaly.com/simple-web-service/).

Follow these steps to deploy this pattern using [CDK](https://aws.amazon.com/cdk/).

1. Install Typescript

```bash
npm -g install typescript
```

2. Install CDK

```bash
npm i -g aws-cdk
```

3. Install dependencies

```bash
npm install
```

4. Synthesize an AWS CloudFormation template

```bash
cdk synth
```

5. Deploys the CDK toolkit stack into an AWS environment

```bash
cdk bootstrap
```

6. Deploy the Stack

```bash
cdk deploy
```

7. Clean Up

```bash
cdk destroy
```

> By default, CDK uses the same configuration settings as the AWS CLI (by way of `~/.aws`). If you want to
> change this, [read how to configure AWS access here](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html).
