export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'ap-southeast-2',
    BUCKET: 'dev-notes-app-uploads'
  },
  apiGateway: {
    REGION: 'ap-southeast-2',
    URL: 'https://xo6r3cuh92.execute-api.ap-southeast-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'ap-southeast-2',
    USER_POOL_ID: 'ap-southeast-2_Ku75q3Maa',
    APP_CLIENT_ID: 'qdf27i6p47csa4cq377f3rlh',
    IDENTITY_POOL_ID: 'ap-southeast-2:493216ec-f653-4bb2-a5ca-eb35803b0402'
  }
};
