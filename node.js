module.exports = (RED) => {
  const OpenAI = require("openai");
  const main = function (config) {
    RED.nodes.createNode(this, config);
    this.Token = config.Token || "";
    this.extension = config.extension || "wav";
    const node = this;

    const openai = new OpenAI({
      apiKey: node.Token,
    });

    node.on("input", async (msg) => {
      node.status({ fill: "green", shape: "dot", text: "処理中..." });
      if (typeof msg.file === "undefined") msg.file = Buffer.from('');
      const buffer = (msg.file.length == 0 ) ? msg.payload : msg.file;
      try {
        const resp = await openai.audio.transcriptions.create({
          file: await OpenAI.toFile(buffer, `hoge.${node.extension}`),
          model: 'whisper-1',
        })
        msg.payload = resp.text;
        node.status({});
      } catch (error) {
        if (error.response) {
          node.status({
            fill: "red",
            shape: "dot",
            text: `${error.response.status}, ${JSON.stringify(
              error.response.data.error.message
            )}`,
          });
          msg.payload = `${error.response.status}, ${JSON.stringify(
            error.response.data.error.message
          )}`;
        } else {
          node.status({
            fill: "red",
            shape: "dot",
            text: `${error.type}, ${error.message}`,
          });
          msg.payload = `${error.type}, ${error.message}`;
        }
      }
      node.send(msg);
    });
  };

  RED.nodes.registerType("simple-whisper", main);
};
