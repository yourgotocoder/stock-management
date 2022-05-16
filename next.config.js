const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "primary",
        mongodb_password: "StudentProfiling2021",
        mongodb_clustername: "cluster0",
        mongodb_database: "stock",
        EMAIL_SERVER_USER: "sudarshan.r@smit.smu.edu.in",
        EMAIL_SERVER_PASSWORD: "Ke2@1995",
        EMAIL_SERVER_HOST: "smtp.office365.com",
        EMAIL_SERVER_PORT: "587",
        EMAIL_FROM: "sudarshan.r@smit.smu.edu.in",
        SECRET: "2n5439tfdgu9fdgu98u9843fdgdfg",
      },
    };
  }

  return {
    env: {
      mongodb_username: "primary",
      mongodb_password: "StudentProfiling2021",
      mongodb_clustername: "mecluster0an",
      mongodb_database: "stock",
    },
  };
};
