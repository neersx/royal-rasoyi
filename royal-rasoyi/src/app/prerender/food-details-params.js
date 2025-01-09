module.exports = async () => {
    // Fetch possible food names from a database, API, or hardcoded list
    const foodNames = ['royal-thali', 'maharaja-laddoo', 'chole-poori'];
    
    return foodNames.map((name) => ({ name }));
  };
  