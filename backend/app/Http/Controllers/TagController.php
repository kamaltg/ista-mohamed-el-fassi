<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;

class TagController extends Controller
{
        // Lister tous les tags
    public function index()
    {
        return response()->json(Tag::all());
    }

    // Ajouter un tag
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:tags,name|max:255'
        ]);

        $tag = Tag::create($validated);
        return response()->json($tag, 201);
    }

    // Supprimer un tag
    public function destroy($id)
    {
        $tag = Tag::findOrFail($id);
        $tag->delete();

        return response()->json(['message' => 'Tag supprimé avec succès']);
    }
}
