module.exports = (webhook, matrix) => {
    if (!matrix.sender.avatarUrl)
        matrix.sender.avatarUrl = webhook.avatarUrl;

    return Promise.resolve();
};