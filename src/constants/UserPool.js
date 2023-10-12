import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_H1X0uYPCn',
  ClientId: '7fp0d783np88p45p214je95osi',
};

export default new CognitoUserPool(poolData);
