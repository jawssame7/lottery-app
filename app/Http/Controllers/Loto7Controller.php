<?php

namespace App\Http\Controllers;

use App\Models\Loto7Result;

class Loto7Controller extends Controller
{
    //
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $sqlQuery = Loto7Result::query();
        $sqlQuery->orderBy('id', 'desc');
        $sqlQuery->limit(30);
        $loto7Results = $sqlQuery->get();
        return response()->json($loto7Results);
    }
}
