module.exports = {
    format_date: (date) => {
      return date.toLocaleDateString();
    },
  
// Date formatting ABOVE
format_amount: (amount) => {
  // format large numbers with commas
  return parseInt(amount).toLocaleString();
},
};
