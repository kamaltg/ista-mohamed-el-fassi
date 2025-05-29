<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\News_attachement; 
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {

        try {
            // Récupération des nouvelles avec les relations personnalisées
            $newsList = News::with(['Tags', 'NewsAttachement'])
                ->orderBy('created_at', 'desc')
                ->get()
                ->map(function ($news) {
                    return [
                        'id' => $news->news_id, 
                        'title' => $news->title,
                        'content' => $news->content,
                        'created_at' => $news->created_at->format('d F Y'),
                        // 'image' =>  $news->NewsAttachement->first()?->path, 
                        'image' =>  asset("storage/attachments/".basename($news->NewsAttachement->first()?->path)), 
                        'tags' => $news->Tags->pluck('name')->toArray(),
                    ];
                });
            return response()->json($newsList);

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Database error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function show($news_id)
    {
        try {
            $news = News::with(['Tags', 'NewsAttachement'])
                       ->where('news_id', $news_id)
                       ->firstOrFail();

            return response()->json([
                'id' => $news->news_id,
                'title' => $news->title,
                'content' => $news->content,
                'created_at' => $news->created_at->format('d F Y'),
                'image' =>  asset("storage/attachments/".basename($news->NewsAttachement->first()?->path)), 
                'attachments' => $news->NewsAttachement->map(function($attachment) {
                    return [
                        'label' => $attachment->label,
                        'path' => asset("storage/attachments/".basename($attachment->path))
                    ];
                }),
                'tags' => $news->Tags->pluck('name')->toArray()
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => 'News not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'tags' => 'required|array',
            'tags.*.tag_id' => 'required|integer|exists:tags,tag_id',
            'attachments' => 'sometimes|array',
            'attachments.*.label' => 'required_with:attachments|string|max:255',
            'attachments.*.file' => 'required_with:attachments|file|max:2048',
        ]);

        try {
            // Création de l'annonce
            $news = News::create([
                'title' => $validated['title'],
                'content' => $validated['content'],
            ]);

            // Association des tags via la table pivot
            $tagIds = collect($validated['tags'])->pluck('tag_id');
            $news->Tags()->attach($tagIds);

            // Gestion des pièces jointes
            if (isset($validated['attachments'])) {
                foreach ($validated['attachments'] as $attachment) {
                    $file = $attachment['file'];
                    $path = $file->store('attachments', 'public');
                    
            $news->NewsAttachement()->create([
                'news_id' => $news->news_id,
                'label' => $attachment['label'],
                'path' => $path
            ]);
                }
            }

            return response()->json([
                'message' => 'Annonce créée avec succès',
                'news_id' => $news->news_id
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Creation failed',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function update(Request $request) {
        //
    }

    public function destroy(Request $request) {
        //
    }
}