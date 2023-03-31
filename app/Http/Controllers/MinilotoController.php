<?php

namespace App\Http\Controllers;

use App\Models\MinilotoResult;

class MinilotoController extends Controller
{
    //
    public function index()
    {
        $sqlQuery = MinilotoResult::query();
        $sqlQuery->orderBy('id', 'desc');
        $sqlQuery->limit(30);
        $minilotoResults = $sqlQuery->get();
        return response()->json($minilotoResults);
    }
}
