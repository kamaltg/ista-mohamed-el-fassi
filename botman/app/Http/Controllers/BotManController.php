<?php

namespace App\Http\Controllers;

use BotMan\BotMan\BotMan;
use BotMan\BotMan\Messages\Incoming\Answer;
use Illuminate\Support\Facades\DB;

class BotManController extends Controller
{
    /**
     * Entry point for the BotMan chatbot.
     */
    public function handle()
    {
        $botman = app('botman');

        $botman->hears('{message}', function ($botman, $message) {
            $message = strtolower($message);

            if ($message === 'bonjour') {
                $this->askName($botman);
            } elseif (str_contains($message, 'disponible')) {
                $this->askFormations($botman);
            } else {
                $botman->reply("Commencez une conversation en disant bonjour.");
            }
        });

        $botman->listen();
    }

    /**
     * Ask the user's name and offer next step.
     */
    public function askName($botman)
    {
        $botman->ask("Bonjour ! Comment t'appelles-tu ?", function (Answer $answer, $conversation) use ($botman) {
            $name = ucfirst(strtolower($answer->getText()));
            session(['user_name' => $name]);

            $conversation->say("Ravi de vous rencontrer, {$name}.");

            $conversation->ask("Faites-vous déjà partie de notre établissement ou êtes-vous un nouvel stagiaire ?", function (Answer $answer, $conversation) use ($botman, $name) {
                $status = strtolower($answer->getText());
                session(['user_status_checked' => true]);

                if (str_contains($status, 'stagiaire')) {
                    $latestPost = DB::table('posts')->latest()->first();

                    if ($latestPost) {
                        $conversation->say("Voilà la dernière annonce 😉:<br>
                    <a target=\"_blank\" href=\"http://localhost:5173/ista-mohamed-el-fassi/tous-actualites/{$latestPost->id}\">
                    <strong>{$latestPost->title}</strong></a>");
                    } else {
                        $conversation->say("Aucune annonce disponible pour le moment.");
                    }
                } elseif (str_contains($status, 'nouvel') || str_contains($status, 'nouveau')) {
                    $this->askFormations($botman); // Appel correct
                } else {
                    $conversation->say("Merci pour votre réponse !");
                }
            });
        });
    }



    /**
     * Display available formations and guide user through parcours and filières.
     */
    public function askFormations($botman)
    {
        $formations = DB::table('formations')->pluck('name')->unique();

        if ($formations->isEmpty()) {
            $botman->reply("Aucune formation disponible pour le moment.");
            return;
        }

        $formatted = $formations->map(fn($f) => "<strong>{$f}</strong>")->join("<br>");
        $botman->reply("Voici les types de formations disponibles à ISTA Mohamed El Fassi à Errachidia:<br><br>{$formatted}");

        $botman->ask("Tapez un type de formation pour consulter les parcours associés :", function (Answer $answer, $conversation) {
            $formationType = $answer->getText();

            $formation = DB::table('formations')->where('name', $formationType)->first();

            if (!$formation) {
                $this->say("Ce type de formation n'existe pas.");
                return;
            }

            $parcours = DB::table('parcours')->where('formation_id', $formation->id)->pluck('name');

            if ($parcours->isEmpty()) {
                $this->say("Aucun parcours trouvé pour cette formation.");
                return;
            }

            $list = $parcours->map(fn($p) => "<strong>{$p}</strong>")->join("<br>");
            $this->say("Voici les parcours disponibles:<br><br>{$list}");

            $conversation->ask("Tapez un parcours pour consulter les filières associées :", function (Answer $answer, $conversation) {
                $parcoursName = $answer->getText();

                $parcours = DB::table('parcours')->where('name', $parcoursName)->first();

                if (!$parcours) {
                    $this->say("Ce parcours n'existe pas.");
                    return;
                }

                $filieres = DB::table('filieres')->where('parcour_id', $parcours->id)->pluck('name');

                if ($filieres->isEmpty()) {
                    $this->say("Aucune filière trouvée pour ce parcours.");
                    return;
                }

                $list = $filieres->map(fn($f) => "<strong>{$f}</strong>")->join("<br>");
                $this->say("Voici les filières disponibles:<br><br>{$list}");
            });
        });
    }
}
