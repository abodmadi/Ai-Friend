export const postData = async (url, data) => {
    try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    return jsonData;
    } catch (error) {
        console.error('Error posting data:', error);
    }
};




