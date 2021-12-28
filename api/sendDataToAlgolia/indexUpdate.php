<?php

require __DIR__ . '/vendor/autoload.php';
// $demo = \Algolia\AlgoliaSearch\Log\DebugLogger::enable(); 
$client = \Algolia\AlgoliaSearch\SearchClient::create(
   '5Q5MRE3O10',
   '87987a848bce3a4415c1939bae22430d'
 );


$index_en = $client->initIndex('andaze_corporate_english_content');
$index_ja = $client->initIndex('andaze_corporate_japanese_content');
$records = json_decode(file_get_contents('https://www.andaze.com/ja/algolia.json'), true);

$en_result = array_filter($records, function ($item) {
  if (stripos($item['lang'], 'en' ) !== false) {
      return true;
  }
  return false;
});

$ja_result = array_filter($records, function ($item) {
  if (stripos($item['lang'], 'ja' ) !== false) {
      return true;
  }
  return false;
});

$index_en->saveObjects($en_result, ['autoGenerateObjectIDIfNotExist' => true]);
$index_ja->saveObjects($ja_result, ['autoGenerateObjectIDIfNotExist' => true]);
?>