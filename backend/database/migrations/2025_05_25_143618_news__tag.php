<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('News_tag', function(Blueprint $table){
            $table->unsignedBigInteger('news_id');
            $table->unsignedBigInteger('tag_id');
            $table->foreign('news_id')->references('news_id')->on('news')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('tag_id')->references('tag_id')->on('tags')->cascadeOnDelete()->cascadeOnUpdate();
            $table->primary(['news_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('News_tag');
    }
};
