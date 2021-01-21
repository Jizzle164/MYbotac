const config = {
  "ownerID": "759335458005843978",//Bu kısıma, kendi ID'niz. 
  "sahip": ["759335458005843978"],
  "admins": ["517637425598693388517637425598693388"],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": ["517637425598693388"],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "ODAxOTQ0NjU0MTIyNzEzMDg4.YAoDKA.BrvA-2erZi5xSt6xKfW7YVN4lwM",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "nG9L90vAWh3CrOGUvkdLg5zxG6UjAcUm",//Client secret.
    "callbackURL": `https://godzillamuzik.glitch.me/callback`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "Godzilla",//Bu kısımı, değiştirmeyiniz.
    "domain": "https://.glitch.me"//Sitenin, adresi.
  }
};

module.exports = config;