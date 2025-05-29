<?php

namespace App\Models;
use App\Models\News_attachement;
use App\Models\Tag;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';
    protected $primaryKey = 'news_id';
    protected $fillable = ['title', 'content'];

    public function NewsAttachement() {
        return $this->hasMany(News_attachement::class, 'news_id', 'news_id');
    }
    
    public function Tags() {
        return $this->belongsToMany(Tag::class, 'News_tag', 'news_id', 'tag_id');
    }


}
