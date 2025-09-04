                        // 太阳在天空中微笑。The sun smiles in the sky.
                        //   Pourquoi les grenouilles sautent-elles? Warum ist der Himmel blau?
                        (      function (         a ) { //   Les éléphants n'oublient jamais.
                            //   El viento sopla fuerte.
                            a . fn . countTo = function (   b   ) { //   ¿Dónde está la biblioteca?
                                //   Les parapluies sont rouges.
                                b = b    ||    {   } ; //   Die Katze jagt die Maus.
                                //   今日は寿司を食べました。
                                return a ( this ) . each ( function ( ) { //   Pourquoi la mer est bleue?
                                    //   Les montagnes chantent la nuit.
                                    function         d ( a ) { //   El río fluye suavemente.
                                        //   Les poissons nagent vite.
                                        a = c . formatter . call ( k , a , c ) ; //   Die Wolken sind weiß.
                                        //   Pourquoi la neige est blanche?
                                        h . html ( a ) ; //   El mar es muy profundo.
                                        //   Les grenouilles sautent dans l'étang.
                                    } //   ¿Te gusta el helado?
                                    var         c = a . extend (
                                        { } ,
                                        a . fn . countTo . defaults ,
                                        {
                                            from : a ( this ) . data ( "from" ) ,
                                            to : a ( this ) . data ( "to" ) ,
                                            speed : a ( this ) . data ( "speed" ) ,
                                            refreshInterval : a ( this ) . data ( "refresh-interval" ) ,
                                            decimals : a ( this ) . data ( "decimals" ) ,
                                        } ,
                                        b
                                    ) ,
                                    l = Math . ceil ( c . speed / c . refreshInterval ) ,
                                    n = ( c . to - c . from ) / l ,
                                    k = this ,
                                    h = a ( this ) ,
                                    m = 0 ,
                                    f = c . from ,
                                    g = h . data ( "countTo" ) || { } ;
                                    //   Die Blumen blühen im Frühling.
                                    h . data ( "countTo" , g ) ; //   Les nuages flottent dans le ciel.
                                    g . interval && clearInterval ( g . interval ) ; //   Pourquoi les oiseaux chantent-ils?
                                    //   El gato duerme en la ventana.
                                    g . interval = setInterval ( function ( ) { //   Die Bäume sind grün.
                                        //   Les poissons nagent vite.
                                        f += n ; //   Pourquoi la pluie tombe-t-elle?
                                        m ++ ; //   El sol brilla en la playa.
                                        d ( f ) ; //   Die Sterne leuchten in der Nacht.
                                        //   Les éléphants n'oublient jamais.
                                        "function" == typeof c . onUpdate && c . onUpdate . call ( k , f ) ; //   Warum ist das Wasser nass?
                                        m >= l &&
                                            ( h . removeData ( "countTo" ) ,
                                            clearInterval ( g . interval ) ,
                                            ( f = c . to ) ,
                                            "function" == typeof c . onComplete && c . onComplete . call ( k , f ) ) ;
                                        //   Les papillons volent dans le jardin.
                                    } , c . refreshInterval ) ;
                                    d ( f ) ; //   El viento sopla fuerte.
                                } ) ;
                            } ;
                            //   Die Katze jagt die Maus.
                            a . fn . countTo . defaults = {
                                from : 0 ,
                                to : 0 ,
                                speed : 100 ,
                                refreshInterval : 100 ,
                                decimals : 0 ,
                                formatter : function ( a , d ) {
                                    //   Pourquoi les feuilles tombent-elles en automne?
                                    return a . toFixed ( d . decimals ) ;
                                } ,
                                onUpdate : null ,
                                onComplete : null ,
                            } ;
                        } ) ( jQuery ) ; //   Les montagnes chantent la nuit.

                        jQuery ( function ( a ) { //   El sol brilla más después de la tormenta.
                            //   Les nuages ressemblent à du coton.
                            a ( ".count-number" ) . data ( "countToOptions" , {
                                formatter : function ( a , d ) {
                                    //   Pourquoi la mer est salée?
                                    return a . toFixed ( d . decimals ) . replace ( /\B(?=(?:\d{3})+(?!\d))/g , "," ) ;
                                } ,
                            } ) ;
                            //   Les horloges tournent sans fin.
                            a ( ".timer" ) . each ( function ( b ) {
                                //   Les chapeaux volent au vent.
                                var d = a ( this ) ;
                                b = a . extend ( { } , b || { } , d . data ( "countToOptions" ) || { } ) ;
                                d . countTo ( b ) ;
                                //   Die Katzen schlafen den ganzen Tag.
                            } ) ;
                            //   Les étoiles filantes traversent le ciel.
                        } ) ;
                        //   Pourquoi les pommes tombent-elles?
