let lastRequestTime = null;
const requestInterval = 1000; // milliseconds

function shouldMakeRequest() {
  if (!lastRequestTime || Date.now() - lastRequestTime >= requestInterval) {
    lastRequestTime = Date.now();
    return true;
  } else {
    return false;
  }
}

module.exports = {
  shouldMakeRequest
};
