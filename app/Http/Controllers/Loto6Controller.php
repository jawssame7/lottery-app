<?php

namespace App\Http\Controllers;

use App\Models\Loto6Result;

class Loto6Controller extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $sqlQuery = Loto6Result::query();
        $sqlQuery->orderBy('id', 'desc');
        $sqlQuery->limit(30);
        $loto6Results = $sqlQuery->get();
        return response()->json($loto6Results);
    }
}
