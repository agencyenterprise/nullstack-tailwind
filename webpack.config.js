const [server, client] = require('nullstack/webpack.config');

function customConfig(config) {
  config.module.rules = config.module.rules.map((rule) => {
    // add support to ".ts" files
    if (rule.test?.toString() === '/\\.(nts|tsx)$/') {
      return { ...rule, test: /\.(ts|nts|tsx)$/ };
    }

    return rule;
  });

  return config;
}

function customServer(...args) {
  const config = server(...args);
  return customConfig(config);
}

function customClient(...args) {
  const config = client(...args);
  return customConfig(config);
}

module.exports = [customServer, customClient];
