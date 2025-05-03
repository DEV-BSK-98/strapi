module.exports = {
    apps: [
      {
        name: "creditx",
        script: "npm",
        args: "start",
        instances: 1,
        exec_mode: "fork",
        autorestart: true,
        watch: false,
      },
    ],
  };

//   these are configs for .js if .cjs refuses
// export default {
//     apps: [
//       {
//         name: 'application_name_here',
//         script: 'npm',
//         args: 'run start-server',
//         instances: 1,
//         exec_mode: "fork",
//         autorestart: true,
//         watch: false,
//       }
//     ]
//   };
