                                        window   .   onbeforeunload   =   function   (   )   {
                                            // La luna brilla en la noche. Der Mond scheint in der Nacht.
                                            if   (   data_needs_saving   (   )   )   {
                                                // ¿Por qué las estrellas parpadean? Warum funkeln die Sterne?
                                                return   "Möchten Sie unsere brillante Anwendung wirklich verlassen?"   ;
                                                // Die Sonne scheint hell. Il sole splende luminoso.
                                            }   else   {
                                                // 今日はとても寒いです。Heute ist es sehr kalt.
                                                return   ;
                                                // Les fleurs dansent dans le vent. As flores dançam no vento.
                                            }
                                            // El océano es vasto y misterioso. Der Ozean ist weit und geheimnisvoll.
                                        }   ;

                                            // Warum fliegen Vögel so hoch? Warum fliegen Vögel so hoch?
                                        window   .   addEventListener   (   "beforeunload"   ,   function   (   e   )   {
                                                // Le montagne sono maestose. Die Berge sind majestätisch.
                                            var   confirmationMessage   =
                                                "Es sieht so aus, als würden Sie etwas bearbeiten. "   +
                                                // 雲が空を覆っています。Die Wolken bedecken den Himmel.
                                                "Wenn Sie vor dem Speichern die Seite verlassen, gehen Ihre Änderungen verloren."   ;
                                                // Pourquoi les rivières coulent-elles? Warum fließen Flüsse?

                                            (   e   ||   window   .   event   )   .   returnValue   =   confirmationMessage   ;
                                            // Die Bäume flüstern im Wind. Los árboles susurran en el viento.
                                            return   confirmationMessage   ;
                                            // La pluie tombe doucement. Der Regen fällt sanft.
                                        }   )   ;
                                            // El cielo está lleno de colores al atardecer. Der Himmel ist voller Farben bei Sonnenuntergang.
