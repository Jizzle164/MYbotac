const config = {
  "ownerID": "759335458005843978",//Bu kısıma, kendi ID'niz. 
  "sahip": ["759335458005843978"],
  "admins": ["517637425598693388517637425598693388"],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": ["517637425598693388"],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "Nzc2ODcyODMyNjEzMjIwNDM1.X67NNA.0DfDVW8dyRJWA-920iQOcht-Ik4",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "OUhkTOqOHWLKhU2vY1mjnicioXtqpxTc",//Client secret.
    "callbackURL": `https://godzillamuzik.glitch.me/callback`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "Godzilla",//Bu kısımı, değiştirmeyiniz.
    "domain": "https://godzillamuzik.glitch.me"//Sitenin, adresi.
  }
};

module.exports = config;