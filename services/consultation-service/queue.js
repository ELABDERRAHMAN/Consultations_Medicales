module.exports = {
  envoyerNotification: (data) => {
    console.log('📨 Notification envoyée:', data);
  },
  envoyerPaiement: (data) => {
    console.log('💳 Paiement demandé:', data);
  }
};