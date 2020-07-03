# Simple Web Service (Pulumi)

To spin up this architecture in your AWS account, follow these steps:

1. [Install Pulumi](https://www.pulumi.com/docs/get-started/install/)

2. Install NPM dependencies

    ```bash
    $ npm install
    # or Yarn if you prefer
    ```

3. Create a New Stack

    ```bash
    $ pulumi stack init
    # follow the prompts...
    ```

4. Configure the AWS Region to Deploy To

    ```bash
    $ pulumi config set aws:region us-east-1
    # any region will do
    ```

5. Deploy!

    ```bash
    $ pulumi up
    # follow the prompts...
    ```

6. Clean Up

    ```bash
    $ pulumi destroy
    ```

> By default, Pulumi uses the same configuration settings as the AWS CLI (by way of `~/.aws`). If you want to
> change this, [read how to configure AWS access here](https://www.pulumi.com/docs/intro/cloud-providers/aws/setup/).
