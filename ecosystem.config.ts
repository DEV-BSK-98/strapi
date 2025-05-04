interface PM2App {
  name: string;
  script: string;
  args?: string;
  instances?: number;
  exec_mode?: "fork" | "cluster";
  autorestart?: boolean;
  watch?: boolean;
}

interface PM2Config {
  apps: PM2App[];
}

const config: PM2Config = {
  apps: [
    {
      name: "creditx",
      script: "npm",
      args: "develop",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: true,
    },
  ],
};

export default config;
