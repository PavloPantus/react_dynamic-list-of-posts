const getDataFromUrl = async(url, defaultData) => {
  const responsePromise = await fetch(url);

  if (responsePromise.ok) {
    const data = await responsePromise.json();

    return data;
  }

  return defaultData;
};

export default getDataFromUrl;
