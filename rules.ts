import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, rectangle, shell, safeOpen } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Change caps_lock to command+control+option+shift.",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          // {
          //     key_code: "left_shift",
          //     modifiers: [
          //         "left_command",
          //         "left_control",
          //         "left_option"
          //     ]
          // },
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      // {
      //   type: "basic",
      //   description: "Change Command Q to minimize window",
      //   from: {
      //     key_code: "q",
      //     modifiers: {
      //       mandatory: ["left_command"],
      //     },
      //   },
      //   to: [
      //     {
      //       key_code: "m",
      //       modifiers: ["left_command"],
      //     },
      //   ],
      // },
      //      {
      //        type: "basic",
      //        description: "Disable CMD + Tab to force Hyper Key usage",
      //        from: {
      //          key_code: "tab",
      //          modifiers: {
      //            mandatory: ["left_command"],
      //          },
      //        },
      //        to: [
      //          {
      //            key_code: "tab",
      //          },
      //        ],
      //      },
    ],
  },
  ...createHyperSubLayers({
    // b = "B"rowse
    b: {
      y: open("https://youtube.com"),
      c: open("https://crunchyroll.com"),
      r: open("https//rocketmoney.com"),
      l: open("https://ldjam.com"),
      g: open("https://github.com"),
    },
    "3": {
      p: app("PrusaSlicer"),
      m: app("Blender"),
      f: app("Autodesk Fusion")
    },
    l: {
      1: safeOpen("raycast://customWindowManagementCommand?&name=Home%20-%20Morning"),
      m: safeOpen("raycast://customWindowManagementCommand?&name=Morning%20Journaling%20Layout")
    },
    o: {
      n: app("Obsidian"),
      v: app("Visual Studio Code"),
      d: app("Discord"),
      e: app("Mail"),
      t: app("Todoist"),
      f: app("ForkLift"),
      u: app("Unity"),
      m: app("Spotify"),
      a: app("Arc"),
      s: app("Slack"),
      r: app("Rider 2024.1"),
      g: app("Godot_mono"),
      h: open("raycast://extensions/raycast/clipboard-history/clipboard-history"),
      k: open("kitty")
    },

    // s = "System/Search"
    s: {
      d: open("raycast://extensions/RSO/dash/index"),
      m: open("raycast://extensions/raycast/navigation/search-menu-items"),
      u: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      semicolon: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      period: {
        to: [
          {
            key_code: "rewind",
          },
        ],
      },
      e: {
        to: [
          {
            // Emoji picker
            key_code: "spacebar",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    c: {
      p: {
        to: [{ key_code: "play_or_pause" }],
      },
      n: {
        to: [{ key_code: "fastforward" }],
      },
      b: {
        to: [{ key_code: "rewind" }],
      },
    },
    m: {
      l: open("raycast://extensions/mattisssa/spotify-player/like"),
      d: open("raycast://extensions/mattisssa/spotify-player/dislike"),
      p: open("raycast://extensions/mattisssa/spotify-player/togglePlayPause"),
      open_bracket: open(
        "raycast://extensions/mattisssa/spotify-player/previous"
      ),
      close_bracket: open("raycast://extensions/mattisssa/spotify-player/next"),
      s: open("raycast://extensions/mattisssa/spotify-player/toggleShuffle"),
      r: open("raycast://extensions/mattisssa/spotify-player/cycleRepeat"),
      w: open("raycast://extensions/mattisssa/spotify-player/devices"),
      c: open("raycast://extensions/mattisssa/spotify-player/copyUrl"),
    },
    // r = "Raycast"
    r: {
      e: open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      p: open("raycast://extensions/raycast/raycast/confetti"),
      h: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
      1: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      ),
      2: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      ),
      3: open(
        "raycast://extensions/VladCuciureanu/toothpick/disconnect-favorite-device-1"
      ),
      4: open(
        "raycast://extensions/VladCuciureanu/toothpick/disconnect-favorite-device-2"
      ),
    },
    n: {
      q: open("raycast://extensions/raycast/raycast/create-quicklink"),
      // "D"aily note
      d: open("raycast://extensions/KevinBatdorf/obsidian/dailyNoteCommand"),
      // "S"earch
      s: open("raycast://extensions/KevinBatdorf/obsidian/searchNoteCommand"),
      // "C"reate
      c: open("raycast://extensions/KevinBatdorf/obsidian/createNoteCommand"),
      r: open("raycast://extensions/raycast/raycast-ai/ai-chat?context=%7B%22preset%22:%22C6116850-80A0-4534-9120-5B0C42B0A047%22%7D"),
    },
  }),
  {
    description: "Change Backspace to Spacebar when Minecraft is focused",
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: "delete_or_backspace",
        },
        to: [
          {
            key_code: "spacebar",
          },
        ],
        conditions: [
          {
            type: "frontmost_application_if",
            file_paths: [
              "^/Users/mxstbr/Library/Application Support/minecraft/runtime/java-runtime-gamma/mac-os-arm64/java-runtime-gamma/jre.bundle/Contents/Home/bin/java$",
            ],
          },
        ],
      },
    ],
  },
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
