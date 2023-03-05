const firstTheme = {
  "--bg-color": "#3a4663",
  "--primary-text": "#ffffff",
  "--secondary-text": "#434a59",
  "--reset-btn": "#647198",
  "--reset-btn-shadow": "#414e73",
  "--equal-btn": "#d03f2f",
  "--equal-btn-shadow": "#93261a",
  "--board-bg": "#242d44",
  "--input-bg": "#181f33",
  "--number-btn-bg": "#eae3dc",
  "--number-color": "#434a59",
  "--number-shadow": "#b3a497",
  "--number-btn-hover": "#fffffe",
  "--reset-btn-hover": "#a2b2e1",
  "--equal-btn-hover": "#f96b5b",
};

const secondTheme = {
  "--bg-color": "#E6E6E6",
  "--primary-text": "#36362C",
  "--secondary-text": "#36362C",
  "--reset-btn": "#378187",
  "--reset-btn-shadow": "#1B6066",
  "--equal-btn": "#C85402",
  "--equal-btn-shadow": "#873901",
  "--board-bg": "#D2CDCD",
  "--input-bg": "#EEEEEE",
  "--number-btn-bg": "#E5E4E1",
  "--number-color": "#36362C",
  "--number-shadow": "#A79E91",
  "--number-btn-hover": "#FFFFFF",
  "--reset-btn-hover": "#62B5BC",
  "--equal-btn-hover": "#FF8A38",
};

const thirdTheme = {
  "--bg-color": "#17062A",
  "--primary-text": "#FFE53D",
  "--secondary-text": "#FFFFFF",
  "--reset-btn": "#56077C",
  "--reset-btn-shadow": "#BE15F4",
  "--equal-btn": "#00DED0",
  "--equal-btn-shadow": "#6CF9F1",
  "--board-bg": "#1E0936",
  "--input-bg": "#1E0936",
  "--number-btn-bg": "#331C4D",
  "--number-color": "#FFE53D",
  "--number-shadow": "#881C9E",
  "--number-btn-hover": "#6C34AC",
  "--reset-btn-hover": "#8631AF",
  "--equal-btn-hover": "#93FFF8",
};

export const setTheme = function (theme) {
  Object.keys(theme).forEach(function (key) {
    document.documentElement.style.setProperty(key, theme[key]);
  });
};

export default [firstTheme, secondTheme, thirdTheme];
