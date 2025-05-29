<?php

namespace App\Models;
use App\Models\News;

use Illuminate\Database\Eloquent\Model;

class News_attachement extends Model
{
    protected $table = 'news_attachements';
    protected $fillable = ['label', 'path'];

    public function News() {
        return $this->belongsTo(News::class);
    }
}
