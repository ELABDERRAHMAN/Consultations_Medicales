const amqp = require('amqplib');

async function start() {
  const conn = await amqp.connect('amqp://rabbitmq');
  const channel = await conn.createChannel();
  const queue = 'notifications';
  await channel.assertQueue(queue, { durable: false });

  channel.consume(queue, msg => {
    const data = JSON.parse(msg.content.toString());
    console.log("📢 Notification received:", data);
    channel.ack(msg);
  });

  console.log("✅ Notification Service is running...");
}
start().catch(console.error);
