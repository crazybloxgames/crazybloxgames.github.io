// Все ссылки страницы. Первая игра показывается крупно.
// name — короткое название на плитке, title — полное название.
// links — где играть. Одна ссылка открывается сразу, несколько показывают окно выбора.
// platform: "android", "ios", "web", "youtube" или "roblox".
// Игра снята с публикации: оставьте links: [], плитка станет серой и покажет сообщение.
window.CRAZYBLOX = {
  games: [
    {
      name: "Merge Brainrot", title: "Merge Italian Brainrot Fellas", img: "img/merge.webp",
      links: [
        { platform: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=merge.brainrot.memes.italian.animals" },
        { platform: "web", label: "Playgama", url: "https://playgama.com/game/merge-italian-brainrot-fellas" }
      ]
    },
    {
      name: "Guess the Meme", title: "Guess Brainrot Meme by Sound", img: "img/guess.webp",
      links: [
        { platform: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=italian.brainrot.guess.meme" },
        { platform: "web", label: "Playgama", url: "https://playgama.com/game/guess-the-brainrot-meme-by-sound" },
        { platform: "web", label: "Yandex Games", url: "https://yandex.ru/games/app/551871" }
      ]
    },
    {
      name: "Memory Cards", title: "MEMory Cards - Find Brainrot", img: "img/memory.webp",
      links: [
        { platform: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=games.sindband.memorycardsbrainrot" },
        { platform: "youtube", label: "YouTube Playables", url: "https://www.youtube.com/playables/UgkxIXh_dk_Hq-5-GWwnBHxDSqGcw5xlEcry" },
        { platform: "web", label: "Playgama", url: "https://playgama.com/game/memory-cards--find-brainrot-pairs" }
      ]
    },
    {
      name: "Music Tunnel", title: "Music Tunnel: Meme Tracks", img: "img/music-tunnel.webp",
      links: [{ platform: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.music.tube.edm.rhythm.game3d" }]
    },
    {
      name: "Soccer Star", title: "Soccer Star - Music Ball Jump 3d", img: "img/soccer-star.webp",
      links: [
        { platform: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=rhythm.hop.game" },
        { platform: "web", label: "Playgama", url: "https://playgama.com/game/soccer-star--music-ball-jump-3d" }
      ]
    },
    {
      name: "Catch Soccer Ball", title: "Catch Soccer Ball: Music Game", img: "img/catch-soccer.webp",
      links: [
        { platform: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=soundbar.rebuild.game" },
        { platform: "web", label: "Playgama", url: "https://playgama.com/game/catch-the-ball-soccer-beats" }
      ]
    },
    {
      name: "Meme Songs", title: "Мем Песни на Яндекс Играх", img: "img/meme-songs.webp",
      links: [{ platform: "web", label: "Yandex Games", url: "https://yandex.ru/games/app/536160" }]
    },
    {
      name: "Prison Escape", title: "Prison Escape: Push the Guards", img: "img/prison-escape.webp",
      links: [
        { platform: "web", label: "Playgama", url: "https://playgama.com/game/prison-escape-push-the-guards" },
        { platform: "web", label: "itch.io", url: "https://crazyblox-games.itch.io/robby-escape-push-the-police" }
      ]
    },
    {
      name: "Mem Dunk", title: "Мем Данк на Яндекс Играх", img: "img/mem-dunk.webp",
      links: [{ platform: "web", label: "Yandex Games", url: "https://yandex.ru/games/app/477586" }]
    },
    {
      name: "New Chat", title: "New Chat: Chat With Your Favorite Girlfriends", img: "img/new-chat.webp",
      links: [
        { platform: "web", label: "Playgama", url: "https://playgama.com/game/new-chat-chat-with-your-favorite-girlfriends" },
        { platform: "web", label: "Yandex Games", url: "https://yandex.ru/games/app/551160" }
      ]
    },
    {
      name: "DJ Beat", title: "DJ Beat Challenge: Tap the Music Beat", img: "img/dj-beat.webp",
      links: [{ platform: "roblox", label: "Roblox", url: "https://www.roblox.com/games/78846174667860/DJ-Beat-Challenge-Tap-the-Music-Beat" }]
    }
  ],
  // Пустой адрес скрывает иконку.
  social: {
    instagram: "https://www.instagram.com/crazyblox.studio/",
    tiktok: "https://www.tiktok.com/@crazybloxgames",
    youtube: "https://www.youtube.com/@crazybloxgames",
    telegram: "",
    vk: ""
  }
};
