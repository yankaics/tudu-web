<div class="position">
	<p>{{foreach item=item from=$boardnav name=foo}}{{if !$smarty.foreach.foo.first}}<span class="icon icon_sub"></span>{{/if}}{{if $smarty.foreach.foo.last && !$smarty.foreach.foo.first && !$last}}{{$item[0]|escape:'html'}}{{else}}<a href="/board{{if $item[1]}}?bid={{$item[1]}}{{/if}}">{{$item[0]|escape:'html'}}</a>{{/if}}{{/foreach}}{{if $showSwitch}}&nbsp;&nbsp;<a href="javascript:void(0)" onclick="toggleAll();" id="toggle-all">[{{$LANG.collapse_zone}}]</a>{{/if}}</p>
    <p class="position_right">{{if $iscreate}}<a href="/board/modify">{{$LANG.create_board}}</a> | {{/if}}{{if $showSearch}}<a href="/board/search-form">{{$LANG.board_search}}</a>{{/if}}</p>
</div>