const config = {
  "ownerID": "564854610309939235",//Bu kısıma, kendi ID'niz. 
  "sahip": ["564854610309939235"],
  "admins": [""],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": [""],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "NzUzMjY1MTg5NDEwOTYzNTI3.X1jq4A.Jn151RXz4jpgCCpt_JBxxjEuSzo",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "4G99fsj3tq5X-mkcyL43tsqeodcKePhG",//Client secret.
    "callbackURL": `https://gelis-muzik-botu.glitch.me/callback`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "Codare",//Bu kısımı, değiştirmeyiniz.
    "domain": "https://gelis-muzik-botu.glitch.me"//Sitenin, adresi.
  }
};

module.exports = config;