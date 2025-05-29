<?php

namespace App\Models;
use App\Models\News;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';
    protected $primaryKey = 'tag_id';
    protected $fillable = ['name'];

    public function News() {
        return $this->belongsToMany(News::class, 'News_tag', 'tag_id', 'news_id');
    }
}
