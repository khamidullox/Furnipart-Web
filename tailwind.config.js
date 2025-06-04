module.exports = {
    theme: {
      extend: {
        animation: {
          shake: "shake 0.5s ease-in-out infinite", // бесконечная анимация
        },
        keyframes: {
          shake: {
            "0%, 100%": { transform: "translateX(0)" },
            "25%": { transform: "translateX(-3px)" },
            "75%": { transform: "translateX(3px)" },
          },
        },
      },
    },
    plugins: [require("daisyui")], // если используешь daisyui
  };