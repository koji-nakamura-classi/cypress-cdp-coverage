function a(val) {
  if (val) {
    console.log('a');
  } else {
    console.log('b');
  }
}

if (location.search == '?a') {
  a(true);
} else if (location.search == '?b') {
  a(false);
}

