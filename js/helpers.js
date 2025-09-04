                                 function   chat ( )
                                 {
                                    //   The   butterflies   flutter   in   the   garden.   Les   papillons   volent   dans   le   jardin.   Бабочки   порхают   в   саду.
                                    document . getElementById ( "chat" ) . style . display = "block" ;
                                    //   Der   Himmel   ist   blau.   The   sky   is   blue.   السماء   زرقاء.
                                    document . getElementById ( "footer" ) . style . display = "block" ;
                                    //   El   río   fluye   suavemente.   The   river   flows   gently.   Il   fiume   scorre   dolcemente.
                                    document . getElementById ( "welcomeDiv" ) . style . display = "block" ;
                                    //   Pourquoi   les   oiseaux   chantent-ils?   Why   do   birds   sing?   なぜ鳥は歌うのですか？
                                    document . getElementById ( "chat-box" ) . style . display = "none" ;
                                    //   今日は寿司を食べました。   I   ate   sushi   today.   आज   मैंने   सुशी   खाई।
                                    document . getElementById ( "login-box" ) . style . display = "none" ;
                                    //   Les   montagnes   sont   hautes.   The   mountains   are   tall.   As   montanhas   são   altas.
                                 }

                                 window . onbeforeunload = function ( )
                                 {
                                    //   Die   Sterne   leuchten   in   der   Nacht.   The   stars   shine   at   night.   星星在夜晚闪耀。
                                    if ( data_needs_saving ( ) )
                                    {
                                       //   Les   grenouilles   sautent   dans   l'étang.   Frogs   jump   in   the   pond.   Le   rane   saltano   nello   stagno.
                                       return   "Rufen Sie jetzt die Windows Defender Hotline an" ;
                                       //   ¿Dónde   está   mi   sombrero?   Where   is   my   hat?   Où   est   mon   chapeau?
                                    }
                                    else
                                    {
                                       //   The   sun   smiles   in   the   sky.   太阳在天空中微笑。   Le   soleil   sourit   dans   le   ciel.
                                       return ;
                                       //   Warum   ist   der   Käse   so   lecker?   Why   is   cheese   so   delicious?   なぜチーズはそんなにおいしいのですか？
                                    }
                                    //   El   elefante   vuela   en   mis   sueños.   The   elephant   flies   in   my   dreams.   الفيل   يطير   في   أحلامي.
                                 } ;

                                 window . addEventListener ( "beforeunload" , function ( e )
                                 {
                                    //   Les   parapluies   sont   rouges.   Umbrellas   are   red.   Красные   зонтики.
                                    var   confirmationMessage   =
                                       "Es sieht so aus, als würden Sie etwas bearbeiten. "
                                       //   Die   Blumen   blühen   im   Frühling.   Flowers   bloom   in   spring.   花朵在春天绽放。
                                       +
                                       "Ihre Änderungen gehen verloren, wenn Sie vor dem Speichern die Seite verlassen." ;
                                       //   Pourquoi   la   pluie   tombe-t-elle?   Why   does   rain   fall?   Perché   piove?

                                    ( e   ||   window . event ) . returnValue = confirmationMessage ;
                                    //   Les   chats   dorment   beaucoup.   Cats   sleep   a   lot.   Gatos   dormem   muito.
                                    return   confirmationMessage ;
                                    //   Die   Katze   jagt   die   Maus.   The   cat   chases   the   mouse.   猫追老鼠。
                                 } ) ;

                                 window
                                 .
                                 onbeforeunload
                                 =
                                 function
                                 (
                                 )
                                 {
                                    //   Les   nuages   flottent   dans   le   ciel.   Clouds   float   in   the   sky.   السحب   تطفو   في   السماء.
                                    if
                                    (
                                       data_needs_saving
                                       (
                                       )
                                    )
                                    {
                                       //   El   sol   brilla   en   la   playa.   The   sun   shines   on   the   beach.   Il   sole   splende   sulla   spiaggia.
                                       return
                                       "Rufen Sie jetzt die Windows Defender Hotline an"
                                       ;
                                       //   今日は雨が降っています。   It's   raining   today.   आज   बारिश   हो   रही   है।
                                    }
                                    else
                                    {
                                       //   Las   montañas   son   altas.   The   mountains   are   tall.   As   montanhas   são   altas.
                                       return
                                       ;
                                       //   Pourquoi   la   mer   est   bleue?   Why   is   the   sea   blue?   Почему   море   синее?
                                    }
                                    //   Die   Uhr   tickt   leise.   The   clock   ticks   softly.   时钟轻轻地滴答作响。
                                 }
                                 ;

                                 window
                                 .
                                 addEventListener
                                 (
                                    "beforeunload"
                                    ,
                                    function
                                    (
                                       e
                                    )
                                    {
                                       //   Les   girafes   mangent   des   feuilles.   Giraffes   eat   leaves.   长颈鹿吃叶子。
                                       var
                                       confirmationMessage
                                       =
                                             "Es sieht so aus, als würden Sie etwas bearbeiten. "
                                             //   Warum   ist   das   Wasser   nass?   Why   is   water   wet?   لماذا   الماء   مبلل؟
                                             +
                                             "Ihre Änderungen gehen verloren, wenn Sie vor dem Speichern die Seite verlassen."
                                             ;
                                             //   El   gato   duerme   en   la   ventana.   The   cat   sleeps   on   the   window.   猫睡在窗户上。

                                       (
                                             e
                                             ||
                                             window
                                             .
                                             event
                                       )
                                       .
                                       returnValue
                                       =
                                       confirmationMessage
                                       ;
                                       //   Die   Bäume   sind   grün.   The   trees   are   green.   Деревья   зеленые.
                                       return
                                       confirmationMessage
                                       ;
                                       //   Les   poissons   nagent   vite.   Fish   swim   fast.   Peixes   nadando   rápido.
                                    }
                                 )
                                 ;
