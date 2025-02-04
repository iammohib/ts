interface Config {
  endpoint: string;
  apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

// config.apiKey = "dfg"; // cause Error, as it is READONLY
