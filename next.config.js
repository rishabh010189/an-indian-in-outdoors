export const future = {
    webpack5: true,
};
export function webpack(config, options) {
    config.experiments = {};
    return config;
}