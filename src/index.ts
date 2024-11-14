import TelegramBot from 'node-telegram-bot-api'

const API_KEY_BOT = process.env.API_KEY_BOT;

const bot = new TelegramBot(API_KEY_BOT, {

  polling: true

});


bot.on("polling_error", err => console.log(err.data?.error?.message));

bot.on('text', async msg => {

  try {

    if(msg.text.startsWith('/start')) {

      await bot.sendGame(msg.chat.id, 'plane');
      // await bot.sendGame(msg.chat.id, 'https://danilpidhainyi.github.io/pilot/');

      // await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);
      //
      // if(msg.text.length > 6) {
      //
      //   const refID = msg.text.slice(7);
      //
      //   await bot.sendMessage(msg.chat.id, `Вы зашли по ссылке пользователя с ID ${refID}`);
      //
      // }

    }
    else if(msg.text == '/ref') {

      await bot.sendMessage(msg.chat.id, `${'process.env.URL_TO_BOT'}?start=${msg.from.id}`);

    }
    else {

      await bot.sendMessage(msg.chat.id, msg.text);

    }

  }
  catch(error) {

    console.log(error);

  }

})

bot.on("callback_query", async msg => {
  await bot.answerCallbackQuery(msg.id, {url: 'https://danilpidhainyi.github.io/pilot/'})
});
