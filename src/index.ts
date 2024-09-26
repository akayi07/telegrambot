import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TOKEN as string;
console.log(process.env)
const bot = new TelegramBot(token, { polling: true });

console.log('Bot is running...');

bot.onText(/\/start/, (msg: any) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello, World!').catch(error => {
    console.error('Error sending message:', error);
  });
});

bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});