## Deck of Cards API

### Running MySQL locally (Requires Root Access):

    mysql -h poker-api-db.cerpjxlxhu8k.us-east-2.rds.amazonaws.com -P 3306 -u admin -p

## Endpoints:

| Function | Request Type | URL                                                    | Description                                                 |
| -------- | ------------ | ------------------------------------------------------ | ----------------------------------------------------------- |
| Shuffle  | POST         | https://poker-api-ehl4s4332a-uc.a.run.app/post/shuffle | Generates deck of 52 cards and randomizes. Generates deckId |
| Draw     | POST         | https://poker-api-ehl4s4332a-uc.a.run.app/post/draw    | Draws card/cards from deck                                  |

### JSON Body

| Function | Body     | Data Type | Required |
| -------- | -------- | --------- | -------- |
| Draw     | deckId   | String    | Yes      |
| Draw     | numCards | Number    | No       |

#### Examples:

- <code> { "deckId": "eeffcad3" } </code>
- <code> { "deckId": "eeffcad3", "numCards": 2 } </code>

## Connecting to VPC withing GCP

<a href="https://cloud.google.com/sql/docs/mysql/connect-run#node.js_1">
    Connecting from Cloud Run to Cloud SQL
</a>

## Deploying to Cloud Build

<a href="https://cloud.google.com/build/docs/deploying-builds/deploy-cloud-run">
    Connecting from Cloud Run to Cloud SQL
</a>

## Sample Node Build

<a href="https://github.com/GoogleCloudPlatform/cloud-build-samples/tree/main/node-example-npm">
    Sample node app CloudBuild
</a>
